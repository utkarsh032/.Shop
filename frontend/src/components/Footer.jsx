
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (

    <footer className="footer footer-center p-2 my-2 bg-base-300 text-base-content ">
      <aside>
        <p>.Shop-{currentYear} - All right reserved by Utkarsh Raj</p>
      </aside>
    </footer>
  )
}

export default Footer
