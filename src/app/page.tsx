import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import StackTech from "@/components/stack-tech";

export default function Home() {
  return (
    <div className="w-1/2 flex justify-center items-center flex-col gap-10">
      <Header />

      <About />

      <Projects />

      <StackTech />

      <Footer />
    </div>
  );
}
