export default function Footer() {
    const gitHubLink = "https://github.com/jgiraldo11/collection-grid";
    const fullYear = new Date().getFullYear();


    return (
        <footer>
            <p>&copy; {fullYear}</p>
            <p><a href={gitHubLink} target="_blank" rel="noreferrer">GitHub</a></p>
        </footer>
    )
}