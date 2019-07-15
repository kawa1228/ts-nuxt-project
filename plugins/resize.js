// リサイズ
export default ({ store }) => {
  if (process.browser) {
    const resizeFunc = () => {
      store.dispatch('app/updateOnlys', {
        isPc: window.innerWidth >= store.state.app.breakpoint
      });
    };
    resizeFunc();
    // TODO: kawasumi removeEventListenerを追加
    window.addEventListener('resize', resizeFunc);
  }
};
