## Infinte Scroll

## Installation
To set up this project on your local machine, follow these steps:

```
git clone https://github.com/rohan-singh987/infinitescroll

# Navigate to the project directory:
cd infinitescroll

# Install dependencies:
npm install
```

## Usage
` npm run dev `

## Folder Structure
- `src/`: Source code
- `components/`:
  1. CardComp : Maping through the array of object we have fetched from api and passing those data as a prop tp CardDetail
  2. CardDetal : Arranging Data into card
  3. Loading : Loader component to display till api fetches the data 
- `Container/`:
  1. Home : Handling infinteScroll function and fetching data from api and passing fetched data to CardComp
  2. Card : Dynamic page triggers when User click on a particular card at Home page, it will redirect to the Card page with content of that particular id
- `Context/`:
  1. DataContext : Using ContextApi hook of react it crates a context
  2. DataState : Used to manage State at top level of application and provide those state directly to different components of application
- `public/`: Static assets

