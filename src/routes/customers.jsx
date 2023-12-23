import Data from "../Data"
import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination';
import '../styles/customers.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge] = useState(8);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(Data);
    }
    fetchPosts();
  }, [])

  const indexOfLastPost = currentPage * postsPerPge;
  const indexOfFirstPost = indexOfLastPost - postsPerPge;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleClick = event => {
    event.currentTarget.classList.toggle('customers__item-status--inactive');
    if (event.currentTarget.classList.contains("customers__item-status--inactive")) {
      event.currentTarget.innerHTML = "Inactive";
      // set data to database
    } else {
      event.currentTarget.innerHTML = "Active";
      // set data to database
    }
  };

  return (
    <div className='customers'>
      <header>
        <div className="customers__sub-header--top">
          <p>All Customers <span>Active Members</span></p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input placeholder="Search" onChange={event => setQuery(event.target.value)} />
          </p>
        </div>
        <div className="customers__sub-header--bottom">
          <span>Customer Name</span>
          <span>Company</span>
          <span>Phone Number</span>
          <span>Email</span>
          <span>Country</span>
          <span>Status</span>
        </div>
      </header>
      <article>
        <ul>
          {currentPosts.filter(data => {
            if (query === '') {
              return data;
            } else if (data.customerName.toLowerCase().includes(query.toLowerCase())) {
              return data;
            }
          }).map((data, index) =>
            <li key={index} className="customers__item">
              <span title={data.customerName}>{data.customerName}</span>
              <span className="customers__item-company" title={data.company}>{data.company}</span>
              <span title={data.phoneNumber}>{data.phoneNumber}</span>
              <span title={data.email}>{data.email}</span>
              <span className="customers__item-country" title={data.country}>{data.country}</span>
              <span 
                className="customers__item-status"
                onClick={ handleClick }
                >
                  {data.staus}
              </span>
            </li>
          )}
        </ul>
      </article>
      <footer>
        <span>Showing data 1 to 8 of { posts.length } entries</span>
        <Pagination length={posts.length} postsPerPage={postsPerPge} handlePagination={handlePagination} currentPage={currentPage} />
      </footer>
    </div>
  )
}

export default App
