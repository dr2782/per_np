import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World 
      <ul>
        <li><Link href="/"><p>Home</p></Link></li>
        <li><Link href="/dashboard"><p>dashboard</p></Link></li>
      </ul>
    </div> 
  );
}
