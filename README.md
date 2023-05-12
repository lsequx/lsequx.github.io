primary color - #3fae48

TITLE:  H5 Security App 
AUTHOR: L.S
VERSION: 1.0


table css /

#log-table {
    width:50%;
    overflow: scroll;
    padding:1rem;
    border-collapse: collapse;
    text-align: center;
    margin-top: 1rem;
}
#log-table-data {
    opacity: 0.9;
}
#log-table tr th {
    color:white;
    font-size: 24px;
    padding:1rem;
    background-color: green;
}
#log-table tr th:not(:last-of-type), tr td {
    border-right: 2px solid #00000031;
}
thead {
    border-bottom: 7px solid black;
}
tr:hover {
    background-color: rgb(168, 168, 168);
    color:white;
    opacity: 1;
}
#log-table tr td {
    padding:0.5rem;
    transition: background-color 0.5s ease;
    font-size: 17px;
    border-bottom: 2px solid #00000031;
}
.view-checklist-link {
    text-decoration:none;
    color:dodgerblue;
    font-weight: 700;
}
.disabled-link {
    color:tomato;
    text-decoration: none;
    font-weight: 400;
}
main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:100%;
}
#search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}
#searchInput {
    width:475px;
    height: 65px;
    padding:1rem;
    font-size: 24px;
    font-weight: 500;
    border:none;
    border-radius: 11px;
    color:#3fae48;
    outline: none;
}
#more-actions-container {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width:25%;
}
#more-actions-container a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 0.5px;
}
#more-actions-container a:first-child {
    color: lightgray;
    transition: color 0.3s ease;
}
#more-actions-container a:first-child:hover{
    color: white;
}
#more-actions-container a:first-child:hover .fa-download{
    animation: move 0.4s ease;
}
@keyframes move {
    to {
        transform: translateY(-0.5rem);
    }
    from {
        transform: translateY(0.25rem);
    }
}
#more-actions-container a:last-child {
    color:lightgray;
    transition: color 0.3s ease;
}
#more-actions-container a:last-child:hover {
    color:white;
}
#more-actions-container a:last-child:hover .fa-house {
    animation: shake 0.5s linear;
}
@keyframes shake {
    from {
        transform: rotate(-25deg);
    }
    to {
        transform: rotate(25deg);
    }
}