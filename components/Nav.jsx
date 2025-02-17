'use client';

export default function Nav() {
    async function handleTabChange(props) {
        console.log(props)
    }

    return (
        <nav className="flex flex-row items-center justify-center z-20 nav">
            <NavItem name="me" />
            <NavItem name="tools" />
            <NavItem name="education" />
            <NavItem name="projects" />
        </nav>
    )
}

function NavItem({ name }) {
    return (
        <button className='flex flex-row navItem' onClick={() => scrollToElement(name)}>
            <div className="side">{" { "}</div>
            { name }
            <div className="side">{" } "}</div>
        </button>
    )
}

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Optional: Add smooth scrolling
    }
  }