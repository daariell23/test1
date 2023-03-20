import React from 'react'

function Header(props) {
    return (
        <div>
            <header>
                <div class="column column-left">
                </div>
                <div class="column column-logo">
                <h1 class="logo-text" onClick={props.onClick}>Dariel's Web</h1>
                </div>
                <div class="column column-right">
                </div>
            </header>
        </div>
    )
}

function Body() {
    return (
        <body>
            <div class="container">
                <p>
                    Kita adalah belahan jiwa <br/>
                    Yang bisa saja terbelah <br/>
                    Namun janganlah itu terlaksana <br/>
                    Karena itu membuat kita musnah
                    <br/><br/>
                    Semua memori kita ku ingat <br/>
                    Diantara kita hanya lurus hati <br/>
                    Tentu saja kita pernah berdebat <br/>
                    Tapi itu tidak membuat gigit jari
                    <br/><br/>
                    Jika aku terjatuh <br/>
                    Dan tak mampu bangkit <br/>
                    Jika aku rapuh <br/>
                    Dan kesedihanku membukit
                    <br/><br/>
                    Maka engkau yang menolong <br/>
                    Memberi tangan bantuan <br/>
                    Yang tulus menyokong <br/>
                    Tanpa ada kepalsuan
                    <br/><br/>
                    Wahai belahan jiwaku <br/>
                    Sekalipun janganlah engkau pergi <br/>
                    Dunia hidupku tanpa dikau <br/>
                    Hanyalah ilusi tanpa henti
                </p>
            </div>
        </body>
    )
}

function Footer() {
    return (
        <footer>
            <div class="footer-text">
            <p class="logo">This Is The Test Page. Click The Title/Header For More Information</p>
            </div>
            <div class="subfooter">
            <hr/>
            <p>&copy; 2023 Dariel</p>
            </div>
        </footer>
    )
}

export {Header, Body, Footer}