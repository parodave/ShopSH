"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  ReactNode,
} from "react";
import { Product, products as allProducts } from "@/data/products";

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

type CartState = { items: CartItem[] };

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; size: string; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: string; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; size: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; payload: CartState };

type AddItemInput = {
  productId: string;
  title: string;
  price: number;
  image?: string;
  size?: string | null;
  quantity?: number;
};

const KEY = "shopsh.cart.v1";

function keyOf(p: { productId: string; size?: string | null }) {
  return `${p.productId}::${p.size ?? ""}`;
}

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return action.payload;
    case "ADD_ITEM": {
      const { product, size, quantity } = action.payload;
      const qty = Math.max(1, quantity);
      const map = new Map(state.items.map((i) => [keyOf({ productId: i.product.id, size: i.size }), i]));
      const k = keyOf({ productId: product.id, size });
      const prev = map.get(k);
      if (prev) {
        map.set(k, { ...prev, quantity: prev.quantity + qty });
      } else {
        map.set(k, { product, size, quantity: qty });
      }
      return { items: Array.from(map.values()) };
    }
    case "REMOVE_ITEM": {
      const k = keyOf(action.payload);
      return {
        items: state.items.filter((i) => keyOf({ productId: i.product.id, size: i.size }) !== k),
      };
    }
    case "UPDATE_QUANTITY": {
      const k = keyOf(action.payload);
      const q = Math.max(1, action.payload.quantity);
      return {
        items: state.items.map((i) =>
          keyOf({ productId: i.product.id, size: i.size }) === k ? { ...i, quantity: q } : i
        ),
      };
    }
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

const CartCtx = createContext<{
  state: CartState;
  count: number;
  // New API
  addItem: (item: AddItemInput) => void;
  removeItem: (p: { productId: string; size?: string | null }) => void;
  updateQuantity: (p: { productId: string; size?: string | null; quantity: number }) => void;
  reset: () => void;
  // Back-compat API
  dispatch: React.Dispatch<CartAction>;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}>({} as any);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) dispatch({ type: "HYDRATE", payload: JSON.parse(raw) });
    } catch {}
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const count = useMemo(() => state.items.reduce((s, i) => s + i.quantity, 0), [state.items]);

  const addItem = (input: AddItemInput) => {
    const product =
      allProducts.find((p) => p.id === input.productId) ||
      ({ id: input.productId, code: input.title, name: input.title, price: input.price, image: input.image || "", category: "", sizes: [input.size || "One Size"], inStock: true } as Product);
    dispatch({
      type: "ADD_ITEM",
      payload: { product, size: input.size ?? (product.sizes[0] || "One Size"), quantity: Math.max(1, input.quantity ?? 1) },
    });
  };

  const removeItem = (p: { productId: string; size?: string | null }) =>
    dispatch({ type: "REMOVE_ITEM", payload: { productId: p.productId, size: p.size ?? "" } as any });

  const updateQuantity = (p: { productId: string; size?: string | null; quantity: number }) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId: p.productId, size: p.size ?? "", quantity: p.quantity } as any });

  const reset = () => dispatch({ type: "CLEAR_CART" });

  // Back-compat helpers
  const getTotalItems = () => count;
  const getTotalPrice = () => state.items.reduce((t, i) => t + i.product.price * i.quantity, 0);

  const value = useMemo(
    () => ({ state, count, addItem, removeItem, updateQuantity, reset, dispatch, getTotalItems, getTotalPrice }),
    [state, count]
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};

export function useCart() {
  return useContext(CartCtx);
}
