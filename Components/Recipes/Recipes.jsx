import { useEffect, useState } from 'react';
import styles from './Css/recipes.module.css';
import { Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Recipes() {
  const TruncatedText = ({text,maxLenght}) =>{
    return(
        <p>
            {text.length > maxLenght ? text.substring(0, maxLenght) + "..." :text}
        </p>
    )
   }

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Fixed typo here
  const [recipesPerPage] = useState(12);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1)
  };

  useEffect(() => {
    fetch('http://localhost:3001/recipe')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const filterRecipes =recipes.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()))

  // Pagination logic
  const lastIndex = currentPage * recipesPerPage;
  const firstIndex = lastIndex - recipesPerPage; // Fixed calculation here
  const currentRecipes = filterRecipes.slice(firstIndex, lastIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const navigation = (recipeId) =>{
    navigate(`/recipes/${recipeId}`)
  }
 
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <h2 className={styles.heading}>Recipes</h2>
        <input
          className={styles.search} // Fixed typo here
          type="text"
          placeholder="Search recipes"
          onChange={handleSearch}
        />
      </div>
      <div className={styles.recipesContainer}>
        {currentRecipes.map((recipe) => (
        <>
          <div onClick={() =>navigation(recipe._id)} key={recipe.id} className={styles.recipe}> {/* Ensure key matches backend */}
            <div className={styles.top}>
              <img src={`http://localhost:3001/${recipe.image}`} alt="img" className={styles.image} />
              <h3 className={styles.title}>
              <TruncatedText text={recipe.title} maxLenght={19} ></TruncatedText>
              </h3>
            </div>
            {/* Bottom section */}
            <div className={styles.bottom}>
            <div className={styles.section}>
              <h5 className={styles.headingSmall}>Prep:</h5>
              <p className={styles.desc}>{recipe.prepTime}</p>
            </div>
            <div className={styles.section}>
              <h5 className={styles.headingSmall}>Cook:</h5>
              <p className={styles.desc}>{recipe.cookTime}</p>
            </div>
            <div className={styles.section}>
              <h5 className={styles.headingSmall}>Serves:</h5>
              <p className={styles.desc}>{recipe.serves}</p>
            </div>
          
          </div>
          <button className={styles.button}>View Recipe</button>
          </div>
          
        </>

        ))}
      </div>
      <Pagination
        count={Math.ceil(filterRecipes.length / recipesPerPage)} // Total number of pages
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        className={styles.pagination}
      />
    </div>
  );
}

export default Recipes;