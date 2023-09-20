const App = () => {
  return (
    <main className="bg-neutral-DarkBlue min-h-screen flex justify-center items-center">
      <section className="text-center bg-neutral-DarkGrayishBlue p-8 rounded-lg">
        {/* mobile */}
        <div className="max-w-xs md:hidden">
          <h6 className="text-primary-NeonGreen">ADVICE # 117</h6>
          <p className="text-primary-LightCyan font-bold pt-6">
            <q className="text-[24px] font-ManRope">
              It is easy to sit up and take notice, what's difficult is getting
              up and taking action.
            </q>
          </p>
          <div className="flex justify-center pt-7">
            <img src="images/pattern-divider-mobile.svg" alt="" />
          </div>
          <div className="flex justify-center relative mt-4">
            <div className="absolute top-1">
              <button className="bg-primary-NeonGreen p-5 rounded-[50px]">
                <img src="images/icon-dice.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
