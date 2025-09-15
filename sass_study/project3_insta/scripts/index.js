const pushBtn = document.querySelectorAll('.psuh_btn a');
console.log(pushBtn);

function iconChange(index){
    const images = [
        "./images/icons/like_on.png",
        "./images/icons/comment_on.png",
        "./images/icons/paper_on.png"
        ];    

    const imgSelect = pushBtn[index].querySelector('img')        
    
    return function(e){imgSelect.src = images[index]
        e.preventDefault();
    }
}

pushBtn[0].addEventListener('click',iconChange(0));
pushBtn[1].addEventListener('click',iconChange(1));
pushBtn[2].addEventListener('click',iconChange(2));


const volumeIcon = document.querySelector('#popup');
const instaPhoto = document.querySelector('#bg');

console.log(instaPhoto,volumeIcon);

volumeIcon.style.transition = 'opacity 1s'

function iconVolume(){      
    volumeIcon.style.opacity = 1;
}
function iconVolumeOut(){      
    volumeIcon.style.opacity = 0;
}

//instaPhoto.addEventListener('click',iconVolume);
instaPhoto.addEventListener('dblclick',iconVolume);//더블클릭했을때 나오는 효과
instaPhoto.addEventListener('mouseout',iconVolumeOut);//더블클릭했을때 나오는 효과