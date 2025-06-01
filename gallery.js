const galleryMainImage = document.getElementById('galleryMainImage');
const thumbnailPhotos = document.querySelectorAll('#thumbnail ul img');
const moveLeftBtn = document.getElementById('move_left');
const moveRightBtn = document.getElementById('move_right');

const imageSrcList = [];

thumbnailPhotos.forEach(img => {
    const src = img.getAttribute('src');
    imageSrcList.push(src);
});


let currentIndex = 0;  // 현재 메인 이미지 인덱스


function scrollThumbnailIntoView(index) {
    const targetThumbnail = thumbnailPhotos[index];
    if (targetThumbnail) {
        targetThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

// 메인 이미지 및 썸네일 테두리 갱신 함수
function updateMainImage(index) {
    currentIndex = index;
    galleryMainImage.src = imageSrcList[index];

    thumbnailPhotos.forEach((img, i) => {
        img.style.border = (i === index) ? 'solid 2px #ffffff' : 'solid 1px #3d3d3d';
    });
    scrollThumbnailIntoView(index);
}

function initializeMainImage(index) {
    currentIndex = index;
    galleryMainImage.src = imageSrcList[index];

    thumbnailPhotos.forEach((img, i) => {
        img.style.border = (i === index) ? 'solid 2px #ffffff' : 'solid 1px #3d3d3d';
    });
}

// 썸네일 클릭 이벤트
thumbnailPhotos.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateMainImage(index);
    });
});

// 오른쪽 버튼 (다음)
moveRightBtn.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % imageSrcList.length;
    updateMainImage(nextIndex);
});

// 왼쪽 버튼 (이전)
moveLeftBtn.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + imageSrcList.length) % imageSrcList.length;
    updateMainImage(prevIndex);
});

initializeMainImage(0);
