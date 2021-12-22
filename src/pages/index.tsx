import { createEffect, createSignal, onMount, Show } from "solid-js";
import Counter from "~/components/Counter";
import createMediaQuery from "~/components/createMediaQuery";
import "./index.css";

export default function Home() {
  const _list = [1, 2, 3, 4, 5];
  const isTablet = createMediaQuery("(min-width: 768px)");
  const [list, setList] = createSignal(_list.slice(0, 3));

  createEffect(() => {
    if (isTablet()) {
      setList(() => [..._list]);
    }
  });

  return (
    <main>
      <h1>Hello world!</h1>
      <Show when={list().length !== _list.length && !isTablet()}>
        <Counter />
      </Show>
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
