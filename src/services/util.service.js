export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    loadFromStorage,
    saveToStorage,
    animateCSS,
    debounce,
    getAssetSrc,
    getRandomTimestamp,
    getRandomColor,
    getTimeOfSent,
    generateRandomSubject
  
  
  }
  function makeId(length = 6) {
    var txt = ''
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
  
    return txt
  }
  
  function makeLorem(size = 100) {
    var words = [
      'The sky',
      'above',
      'the port',
      'was',
      'the color of television',
      'tuned',
      'to',
      'a dead channel',
      '.',
      'All',
      'this happened',
      'more or less',
      '.',
      'I',
      'had',
      'the story',
      'bit by bit',
      'from various people',
      'and',
      'as generally',
      'happens',
      'in such cases',
      'each time',
      'it',
      'was',
      'a different story',
      '.',
      'It',
      'was',
      'a pleasure',
      'to',
      'burn',
    ]
    var txt = ''
    while (size > 0) {
      size--
      txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
  }
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
  }
  
  function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
  }
  
  function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }
  
  // In our utilService
  function animateCSS(el, animation) {
    const prefix = 'animate__'
    return new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`
  
      el.classList.add(`${prefix}animated`, animationName)
  
      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation()
        el.classList.remove(`${prefix}animated`, animationName)
        resolve('Animation ended')
      }
      el.addEventListener('animationend', handleAnimationEnd, { once: true })
    })
  }
  
  function getAssetSrc(name) {
    const path = `/src/assets/img/${name}`
    const modules = import.meta.globEager('/src/assets/img/*')
    const mod = modules[path]
    return mod.default
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  
  function getDayName(date, locale) {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
  }
  
  function getMonthName(date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return monthNames[date.getMonth()]
  }
  
  function getRandomTimestamp(startDate, endDate) {
    const startDateObj = new Date(startDate)
    const endDateObj = new Date(endDate)
  
    const startTimestamp = startDateObj.getTime()
    const endTimestamp = endDateObj.getTime()
  
    const randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) + startTimestamp
  
    return randomTimestamp
  }
  
  function getTimeOfSent(time) {
    if (!time) return ''
    const date = new Date(time)
    const today = new Date()
  
    const options = { month: 'short', day: 'numeric' }
    let hours = date.getHours()
    const minutes = date.getMinutes()
  
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // The hour '0' should be '12'
  
    const minutesStr = minutes < 10 ? '0' + minutes : minutes
  
    const isSameDay = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    const isSameYear = date.getFullYear() === today.getFullYear()
  
    if (isSameDay) {
      return hours + ':' + minutesStr + ' ' + ampm
    } else if (!isSameYear) {
      // Format date as dd/mm/yyyy if not from the current year
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`
    } else {
      // Format date as "MMM dd" for dates from the current year but not today
      return date.toLocaleDateString('en-US', options)
    }
  }
  
  function generateRandomSentence() {
    const subjects = ['The cat', 'A dog', 'My neighbor', 'The teacher', 'An artist', 'The scientist', 'A musician', 'The writer', 'A student', 'The chef']
  
    const verbs = ['jumps over', 'runs around', 'paints', 'writes', 'studies', 'cooks', 'sings', 'plays', 'discovers', 'teaches']
  
    const objects = ['the fence', 'a tree', 'a masterpiece', 'a novel', 'in the library', 'a delicious meal', 'a beautiful song', 'the guitar', 'a new element', 'the class']
  
    const adverbs = ['quickly', 'gracefully', 'quietly', 'enthusiastically', 'diligently', 'skillfully', 'beautifully', 'loudly', 'carefully', 'happily']
  
    const sentence = `${getRandomElement(subjects)} ${getRandomElement(verbs)} ${getRandomElement(objects)} ${getRandomElement(adverbs)}.`
  
    return sentence
  }
  
  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  
  function generateRandomSubject() {
    const adjectives = ['Important', 'Urgent', 'Exciting', 'New', 'Weekly', 'Monthly', 'Special', 'Critical', 'Confidential', 'Exclusive']
  
    const nouns = ['Update', 'Announcement', 'Reminder', 'Offer', 'Report', 'Invitation', 'Summary', 'Alert', 'Notice', 'Schedule']
  
    const contexts = ['Meeting', 'Event', 'Promotion', 'Task', 'Project', 'Deadline', 'Feedback', 'Plan', 'Change', 'Opportunity']
  
    const subject = `${getRandomElement(adjectives)} ${getRandomElement(nouns)}: ${getRandomElement(contexts)}`
  
    return subject
  }
  
  function generateRandomEmailSender() {
    const names = ['john', 'jane', 'alex', 'chris', 'pat', 'taylor', 'jordan', 'casey', 'jamie', 'morgan', 'momo', 'sam', 'kim', 'lee', 'kelly']
  
    const domains = ['example.com', 'mail.com', 'email.com', 'webmail.com', 'inbox.com', 'gmail.com', 'yahoo.com', 'outlook.com']
  
    const name = getRandomElement(names)
    const domain = getRandomElement(domains)
    return `${name}@${domain}`
  }
  