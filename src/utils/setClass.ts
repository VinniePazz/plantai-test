// TODO: type annotation
/** Helper function that dynamically creates className string
 * for React components. Each key is class reference from css
 * module file. Each value is truthy or falsy value that
 * determines - join this rule to className or not.
 *
 * If you want class rule always be attached to compnent - just
 * pass any trutthy value for key:
 * {
 *    [css.button]: true,
 *    [css.redButton]: false,
 *    [css.greenButton]: true
 * }
 *
 * Note: use only with css modules!
 */
export default (opt: any) => {
  let arrayOfClasses = []
  const keys = Object.keys(opt)
  for (let key of keys) {
    if (opt[key]) {
      arrayOfClasses.push(key)
    }
  }

  return arrayOfClasses.join(' ')
}
