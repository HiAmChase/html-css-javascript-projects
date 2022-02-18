const smallBtls = document.querySelectorAll(".small-bottle");
const emptyEl = document.querySelector(".empty-area");
const waterEl = document.querySelector(".water-area");

const initLiter = 2;
const litPerBtl = 0.25;
var count = 0;

smallBtls.forEach((smallBtl, index) => {
    smallBtl.addEventListener('click', () => {
        count = 0;

        smallBtls.forEach((anotherBtl, anotherIdx) => {
            
            if (anotherIdx < index) {
                anotherBtl.classList.add("active");
            }
            else if (anotherIdx > index) {
                anotherBtl.classList.remove("active");
            }
        })

        if(!smallBtl.classList.contains("active"))
            smallBtl.classList.add("active");
        else
            smallBtl.classList.remove("active");

        smallBtls.forEach(smallBtl => {
            if (smallBtl.classList.contains("active"))
                count += 1;
        })

        const percentWater = count / smallBtls.length * 100;

        emptyEl.innerHTML = (percentWater !== 100) ? `
            <h4>${initLiter - count * litPerBtl}L</h4>
            <span>Remained</span>
        ` : ``;
        

        waterEl.innerHTML = (percentWater === 0) ? `` : (percentWater + '%');

        emptyEl.style.height = 100 - percentWater + '%';
        waterEl.style.height = percentWater + '%';
        
    })    
})