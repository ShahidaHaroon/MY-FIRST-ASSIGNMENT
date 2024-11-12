import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-2 bg-blue-600 text-white">
      <div className='text-3xl'>Shahida`s Website</div>
      <div className="flex space-x-6">
        <Link href="/" className='hover:text-black'>Main</Link>
        <Link href="/prices" className='hover:text-black'>Prices</Link>
        <Link href="/about" className='hover:text-black'>About</Link>
        <Link href="/contact" className='hover:text-black'>Contact</Link>
        <Link href="/announcement" className='hover:text-black'>Announcement</Link>
      </div>
    </nav>
  );
}
