
function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className="mx-4 ">
        <div  className="flex justify-between">
            <p className="font-bold">Walon &copy;{year}</p>
            <p>All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer