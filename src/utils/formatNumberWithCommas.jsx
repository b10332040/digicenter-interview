const formatNumberWithCommas = (num) => {
  num = Number(num)

  if (isNaN(num)) {
    return ''
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default formatNumberWithCommas