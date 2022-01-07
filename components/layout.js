import layout from '../styles/layout.module.css';

export default function Layout(props) {
  return (
    <div class={layout.layout}>
      <header class={layout.header}></header>
      <main class={layout.main}>{props.children}</main>
      <footer class={layout.footer}></footer>
    </div>
  );
}
