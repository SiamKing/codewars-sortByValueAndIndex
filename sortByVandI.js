function sortByValueAndIndex(array) {
  return array.map((n, i) => [n, n * (i + 1)])
            .sort((a, b) => a[1] - b[1])
            .map(a => a[0])
}
