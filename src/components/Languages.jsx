import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Languages = () => {
    const languages = [
        {"language": "Select", "code": "0"},
        {"language": "Arabic", "code": "ar"},
        {"language": "Armenian", "code": "hy"},
        {"language": "Azerbaijani", "code": "az"},
        {"language": "Basque", "code": "eu"},
        {"language": "Bengali", "code": "bn"},
        {"language": "Bosnian", "code": "bs"},
        {"language": "Bulgarian", "code": "bg"},
        {"language": "Catalan", "code": "ca"},
        {"language": "Cebuano", "code": "ceb"},
        {"language": "Dutch", "code": "nl"},
        {"language": "English", "code": "en"},
        {"language": "French", "code": "fr"},
        {"language": "German", "code": "de"},
        {"language": "Greek", "code": "el"},
        {"language": "Gujarati", "code": "gu"},
        {"language": "Hindi", "code": "hi"},
        {"language": "Hungarian", "code": "hu"},
        {"language": "Icelandic", "code": "is"},
        {"language": "Indonesian", "code": "id"},
        {"language": "Irish", "code": "ga"},
        {"language": "Italian", "code": "it"},
        {"language": "Japanese", "code": "ja"},
        {"language": "Kannada", "code": "kn"},
        {"language": "Korean", "code": "ko"},
        {"language": "Latin", "code": "la"},
        {"language": "Malayalam", "code": "ml"},
        {"language": "Nepali", "code": "ne"},
        {"language": "Persian", "code": "fa"},
        {"language": "Portuguese", "code": "pt"},
        {"language": "Punjabi", "code": "pa"},
        {"language": "Romanian", "code": "ro"},
        {"language": "Russian", "code": "ru"},
        {"language": "Serbian", "code": "sr"},
        {"language": "Spanish", "code": "es"},
        {"language": "Swedish", "code": "sv"},
        {"language": "Tamil", "code": "ta"},
        {"language": "Telugu", "code": "te"},
        {"language": "Thai", "code": "th"},
        {"language": "Turkish", "code": "tr"},
        {"language": "Ukrainian", "code": "uk"},
        {"language": "Urdu", "code": "ur"},
        {"language": "Vietnamese", "code": "vi"},
      ]

    return (
        languages.map((obj) => {
            return(
                <option key={uuidv4()} value={obj.code} className='bg-[#1B4332] scroll'>{obj.language}</option>
            )
        })
    )
}

export default Languages