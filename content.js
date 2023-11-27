const rickRollImgs=[
    "https://images-prod.dazeddigital.com/830/azure/dazed-prod/1150/0/1150228.jpg",
    "https://veteranlife.com/wp-content/uploads/2022/10/rickrolled-meaning.jpg",
    "https://images.squarespace-cdn.com/content/v1/5b788d28697a98e17a6d4c7a/b83f0eab-7dd6-4e9b-83a1-13139ac2a03b/rickroll+cropped.png"
    
]

const imgs = document.getElementsByTagName('img');

for(let image of imgs ){
    const index= Math.floor(Math.random() * rickRollImgs.length)
    image.src= rickRollImgs[index]
}