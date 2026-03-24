import { useEffect, useRef } from "react";

const Movielist = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isPaused = useRef(false); // 🔥 pause control

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !movies || movies.length === 0) return;

    const speed = 0.5;

    const scroll = () => {
      if (!isPaused.current) {
        container.scrollLeft += speed;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [movies]);

  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 md:px-12 py-6 bg-black">
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
        {title}
      </h1>

      <div
        ref={scrollRef}
        onMouseEnter={() => (isPaused.current = true)}   // 🔥 pause
        onMouseLeave={() => (isPaused.current = false)}  // 🔥 resume
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {[...movies, ...movies].map((movie, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-[300px] h-[140px] md:h-[170px] rounded-lg overflow-hidden transform transition duration-300 hover:scale-110 hover:z-20"
          >
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
              alt="movie"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movielist;