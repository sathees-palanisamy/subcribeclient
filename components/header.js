import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Edit Subcribe', href: '/edit' },
    currentUser && { label: 'Subcribed Career', href: '/career' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
    
   
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
     
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>

      );
    });

  return (
    <nav className="departNav">
      <Link href="/">
        <a className="navbar-brand">Career Subscribe</a>
      </Link>

  
       {links}
  
    </nav>
  );
};
