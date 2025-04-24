import { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import styles from './Css/recipeDetails.module.css';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/recipe/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return (
      <div className={styles.loading}>
        Loading
        <SyncLoader color="#4A4A4A" size={6} speedMultiplier={0.5} className={styles.dots} />
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Left Side: Heading, Author, and Prep Time */}
        <div className={styles.left}>
          <h2 className={styles.title}>{recipe.title}</h2>
          <div className={styles.section}>
            <div className={styles.sectionDesc}>
              <p className={styles.descHeading}>Prep Time:</p>
              <p className={styles.desc}>{recipe.prepTime}</p>
            </div>
            <div className={styles.sectionDesc}>
              <p className={styles.descHeading}>Cook Time:</p>
              <p className={styles.desc}>{recipe.cookTime}</p>
            </div>
            <div className={styles.sectionDesc}>
              <p className={styles.descHeading}>Servings:</p>
              <p className={styles.desc}>{recipe.serves}</p>
            </div>
          </div>
          <div className={styles.info}>
            <p className={styles.author}>
              {recipe.author.firstName} {recipe.author.lastName}
            </p>
            <time className={styles.date}>
              {format(new Date(recipe.createdAt), 'd MMM, yyyy')}
            </time>
          </div>
          <div className={styles.summaryDiv}>
                <h4 className={styles.summaryHeading}>Summary</h4>
                <p className={styles.summary}>{recipe.summary}</p>
          </div>

        </div>

        {/* Right Side: Image */}
        <div className={styles.right}>
          <img
            src={`http://localhost:3001/${recipe.image}`}
            alt="img"
            className={styles.image}
          />
        </div>
      </div>

      {/* Preparation and Content */}
      <div className={styles.preparation}>
        <p
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: recipe.preparation }}
        />
      </div>
    </div>
  );
}

export default RecipeDetails;