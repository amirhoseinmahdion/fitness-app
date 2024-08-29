import CartContext from "@mahdion/context/cartcontext";
import LayoutPage from "@mahdion/layout/layout";
import "@mahdion/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <CartContext>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </CartContext>
  );
}
