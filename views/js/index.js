document.addEventListener('DOMContentLoaded', app);

function app () {

    const state = {
        categories: [
            {
                categoryName: 'blueberry',
                sorts: [
                    {
                        sortName: 'bluecrop',
                        count: 1,
                        price: 99.99,
                        age: null,
                    },
                    {
                        sortName: 'bluegold',
                        count: 1,
                        price: 99.99,
                        age: null,
                    },
                    {
                        sortName: 'denisblue',
                        count: 1,
                        price: 99.99,
                        age: null,
                    }
                ],
                imgLinks: [
                    {
                        imgName: '',
                        altName: '',
                        imgSrc: ''
                    }
                ]
            },
            {
                categoryName: 'Blackberry',
                sorts: [
                    {
                        sortName: 'prime ark freedom',
                        count: 1,
                        price: 99.99,
                        age: null,
                    },
                    {
                        sortName: 'natchez',
                        count: 1,
                        price: 99.99,
                        age: null,
                    },
                    {
                        sortName: 'karaka black',
                        count: 1,
                        price: 99.99,
                        age: null,
                    }
                ]
            },
            {
                categoryName: 'Strawberry',
                sorts: [
                    {
                        sortName: 'charlotte',
                        count: 1,
                        price: 99.99,
                        age: null,
                    },
                    {
                        sortName: 'malvina',
                        count: 1,
                        price: 99.99,
                        age: null,
                    },
                    {
                        sortName: 'vendi',
                        count: 1,
                        price: 99.99,
                        age: null,
                    },
                    {
                        sortName: 'verona',
                        count: 1,
                        price: 99.99,
                        age: null,
                    }
                ]
            }
        ]
    };

    const swiper = new Swiper('.swiper', {
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const collapse = new HandyCollapse()

    const sortsRender = (sorts = []) => {
        const priceGrid = document.createElement('div');
        const sortValueHead = document.createElement('div');
        const priceValueHead = document.createElement('div');
        const valueHeadSpan = document.createElement('span');
        const priceHeadSpan = document.createElement('span');
        const br = document.createElement('br');
        valueHeadSpan.textContent = 'sort';
        priceHeadSpan.append('price BYN');
        sortValueHead.append(valueHeadSpan);
        priceValueHead.append(priceHeadSpan);
        priceGrid.append(sortValueHead, priceValueHead);
        if (sorts.length < 1) {
            return priceGrid;
        }

        const sortValueEl = document.createElement('div');
        const priceValueEl = document.createElement('div');

        const priceBtn = document.createElement('button');

        priceGrid.classList.add('price-grid', 'base--paddingH16');

        sortValueHead.classList.add('price-grid__type-header');
        priceValueHead.classList.add('price-grid__price-header');

        sortValueEl.classList.add('price-grid__type-value');
        priceValueEl.classList.add('price-grid__price-value');
        priceBtn.classList.add('price-btn', 'price-btn--normal');

        sorts.forEach((sort) => {
            const currentSortValueEl = sortValueEl.cloneNode();
            const currentSortPriceEl = priceValueEl.cloneNode();
            const currentPriceBtn = priceBtn.cloneNode();
            currentSortValueEl.textContent = sort.sortName[0].toUpperCase() + sort.sortName.slice(1);
            currentPriceBtn.textContent = sort.price;
            currentSortPriceEl.append(currentPriceBtn);

            priceGrid.append(currentSortValueEl, currentSortPriceEl);
        });

        return priceGrid;
    }
    const showSlider = (e) => {

        // const item = e.currentTarget;
        // const value = item.querySelector('.accordion__name');
        // const generatedGalleryName = 'gallery' + value.textContent.toLowerCase();
        // const gallery = document.createElement('div');
        // gallery.classList.add('swiper, gallery', generatedGalleryName);

        // const currentCategoryName = e.currentTarget.querySelector('.accordion__name')?.textContent?.toLowerCase() || '';
        // const currentIndex = state.categories.findIndex((category) => category.categoryName.toLowerCase() === currentCategoryName);
        // const currentTable = sortsRender(state.categories[currentIndex].sorts);


    }
    const categories = document.querySelectorAll('.accordion .accordion__item');
    categories.forEach((categoryItem) => {
        const currentCategory = categoryItem.querySelector('.accordion__name').textContent.toLowerCase();
        const currentIndex = state.categories.findIndex((category) => category.categoryName.toLowerCase() === currentCategory);
        categoryItem.append(sortsRender(state.categories[currentIndex].sorts));
        categoryItem.addEventListener('click', showSlider)

    })
}