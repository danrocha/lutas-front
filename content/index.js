// index.js
const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects
 */
const getFiles = (dir) => {
  const files = fs.readdirSync(dir)
  const filelist = []

  files.forEach((file) => {
    const markdownFile = fs.readFileSync(`${dir}${file}`, 'utf-8')
    const fileContents = parseMarkdown(markdownFile)
    const date = fileContents.date
    const slug = file
      .split('.')
      .slice(0, -1)
      .join('.')

    const obj = { date, slug }

    filelist.push(obj)
  })
  return filelist
}

const writeEntries = async (type) => {
  const fileArray = await getFiles(`content/${type}/`)

  // Order array by date (default asc)
  const sortedArray = await fileArray.sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
  })

  // Reverse array and write to JSON
  const reversedArray = await sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile(`content/${type}.json`, jsonContent, (err) => {
    if (err) throw new Error(err)
  })
}

const types = ['blog', 'livros', 'eventos']
types.map((type) => writeEntries(type))
