import './BooksPage.scss'

const BooksPage = () => {

    return (
        <div className="BooksPage wrapper1200">
            <div className="bookList">
                <div className="title">Books</div>
                <ul className="chapters">
                    <li className="chapter">1800-1810</li>
                    <li className="chapter">1810-1820</li>
                    <li className="chapter">1820-1830</li>
                    <li className="chapter">1830-1840</li>
                    <li className="chapter">1840-1850</li>
                    <li className="chapter">1850-1860</li>
                    <li className="chapter">1860-1870</li>
                    <li className="chapter">1870-1880</li>
                    <li className="chapter">1880-1890</li>
                    <li className="chapter">1890-1899</li>
                </ul>
            </div>
            <div className="bookDisplay">
                
                <embed class="pdfViewer" src="./pdf/1820-1829.pdf" width="600" height="500" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html" />

            </div>
        </div>
    )
}

export default BooksPage