import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetch("https://talent-pro-task-server.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error))
  }, []);
 
  return (
    <>
      <div className="max-w-5xl mx-auto my-10">
        <section className="text-center">
          <h3 className="text-3xl font-bold font-mono">
            Explore Our Storage Space, Co-Working Space, <br /> Co-Warehouse &
            Services
          </h3>
          <p className="text-gray-500 my-6 font-serif">
            Carefully crafted for a hassle-free and affordable experience
          </p>
        </section>

        <div className="text-center">
          {!services && (
            <span className="loading loading-dots loading-lg"></span>
          )}
        </div>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-items-center">
          {services?.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
