import './Contact.css';


export const Contact = () => {

const handleSubmit = () => {
    // Получаем значения из полей ввода
    const name = (document.querySelector('input[type="text"]') as HTMLInputElement)?.value;
    const email = (document.querySelector('input[type="email"]') as HTMLInputElement)?.value;
    const message = (document.getElementById('res') as HTMLInputElement)?.value;
    
    // Выводим alert с собранными данными
    alert(`Имя: ${name}\nПочта: ${email}\nСообщение: ${message}`);
  };

    return(
        <div id='contact' className='form-container'>
            <div className='form-content'>
                {/* <h2>Свяжитесь со мной</h2> */}
            <form className='form'>
                <input type="text" placeholder='Имя' />
                <input type="mail" placeholder='Почта' />
                <input id='res' type="text" placeholder='Сообщение' />
                <button onClick={handleSubmit}>Отправить</button>
            </form>
            <div className='links'>
                <p className='links-title'>Свяжитесь со мной</p>
                <div>
                    <p><a href='https://t.me/BBiddukk'>Telegram</a></p>
                    <p><a href='https://vk.com/kakoytotamchelik'>VK</a></p>
                    <p><a href='https://github.com/B1duk?tab=repositories'>GitHub</a></p>
                </div>
            </div>
            </div>
        </div>
    );
}