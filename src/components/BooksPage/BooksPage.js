import React, { useState } from 'react'
import './BooksPage.scss'

const BooksPage = () => {
    const [selectedPDF, setSelectedPDF] = useState('1820-1829')
    console.log(selectedPDF)

    const decades = ['1800-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899']

    // i have to re-render the embed tag so that the right PDF loads.
    // maybe there's a better way to do this
    const changePDF = (name) => {
        setSelectedPDF(name)
    }

    return (
        <div className="BooksPage wrapper1200">
            <div className="bookList">
                <div className="title">Books</div>
                <ul className="chapters">
                    {decades.map((decade, index) => (
                        <li onClick={() => changePDF(decades[index]) } key={index} className={decade === selectedPDF ? "chapter active" : "chapter"}>{decade}</li>
                    ))}
                </ul>
            </div>
            <div className="bookDisplay">
            {decades.map((decade, index) => (
                <React.Fragment>
                    {selectedPDF === decade && (
                        <embed className="pdfViewer" key={index} src={`./pdf/${decade}.pdf`} width="600" height="500" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html" />
                    )}
                </React.Fragment>
            ))}
            
            
            </div>
        </div>
    )
}

export default BooksPage