import React from 'react'

async function fetchCocktail(slug: string) {
  const res = await fetch(`http://localhost:3000/cocktail/${slug}`);
  if (!res.ok) {
      return null;
  }
  return res.json();
}

interface CocktailProps {
  params: { slug: string };
}

const CocktailPage: React.FC<CocktailProps> = async ({ params }) => {
const cocktail = await fetchCocktail(params.slug);

  if (!cocktail) {
      return null;
  }
  return (
      <div>
          <h1>{cocktail.name}</h1>
          <p>{cocktail.description}</p>

      </div>
  );
};

export default CocktailPage;