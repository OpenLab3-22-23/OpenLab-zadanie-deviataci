import './style.css';
import './xmojStyl.css';
// Zvislá čiara a obľúbený učiteľ

// KONIEC Zvislá čiara a obľúbený učiteľ

zvislaCiara.addEventListener('click', () => {
    if (!zvislaCiara.classList.contains('animuj')) {
        if (zvislaCiara.classList.contains('animuj-spat')) {
            zvislaCiara.classList.remove('animuj-spat');
            oblubenyUcitel.classList.remove('animuj-ucitela-spat');
        }
        zvislaCiara.classList.add('animuj');
        oblubenyUcitel.classList.add('animuj-ucitela');
    } else {
        zvislaCiara.classList.remove('animuj')
        zvislaCiara.classList.add('animuj-spat');
        oblubenyUcitel.classList.remove('animuj-ucitela');
        oblubenyUcitel.classList.add('animuj-ucitela-spat');
    }
})
