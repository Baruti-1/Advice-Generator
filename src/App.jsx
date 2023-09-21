import { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState({
    id: '',
    advice: '',
  });

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setAdvice({ ...advice, id: data.slip.id, advice: data.slip.advice });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main className="bg-neutral-DarkBlue min-h-screen flex justify-center items-center">
      <section className="text-center bg-neutral-DarkGrayishBlue p-8 rounded-lg">
        {/* mobile */}
        <div className="max-w-xs md:hidden">
          {!loading && (
            <h1 className="text-primary-NeonGreen">ADVICE # {advice.id}</h1>
          )}
          <p className="text-primary-LightCyan font-bold pt-6">
            {loading ? (
              'loading...'
            ) : (
              <q className="text-[24px] font-ManRope">{advice.advice}</q>
            )}
          </p>
          <div className="flex justify-center pt-7">
            <img src="images/pattern-divider-mobile.svg" alt="mobile divider" />
          </div>
          <div className="flex justify-center relative mt-4">
            <div className="absolute top-1">
              <button
                type="button"
                className="bg-primary-NeonGreen p-5 rounded-[50px]"
                onClick={() => {
                  getAdvice();
                }}
              >
                <img src="images/icon-dice.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        {/* desktop */}
        <div className="hidden md:block max-w-sm">
          {!loading && (
            <h1 className="text-primary-NeonGreen">ADVICE # {advice.id}</h1>
          )}
          <p className="text-primary-LightCyan font-bold pt-6">
            {loading ? (
              'loading...'
            ) : (
              <q className="text-[24px] font-ManRope">{advice.advice}</q>
            )}
          </p>
          <div className="flex justify-center pt-7">
            <img
              src="images/pattern-divider-desktop.svg"
              alt="desktop divider"
            />
          </div>
          <div className="flex justify-center relative mt-4">
            <div className="absolute top-1">
              <button
                type="button"
                className="bg-primary-NeonGreen p-5 rounded-[50px]"
                onClick={() => {
                  getAdvice();
                }}
              >
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
