module.exports = (input) => {
    const  messageDecoded = input.map((text) => {
        const words = text.split(" ");
        let counter = 0;
        let word = "";
        for (let i = 0; i < words.length; i++) {
            if(words[i][counter]){
                word+=words[i][counter];
                counter++;
            }
        }
        return word
    });

    return messageDecoded.join(' ');
};
