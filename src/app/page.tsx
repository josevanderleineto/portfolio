import About from '../components/About/About';
import Home from '../components/Home/Home';
 
export default function Page() {
  return (
    <main className="relative z-10">
      <div id='home'>
        <Home />
      </div>
      <div id="about">
        <About/>
      </div>
    </main>
  );
}
