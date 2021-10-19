/**
 * validates form fields
 * @param {Object} fields - the fields object from the target form in key-value pairs
 * @returns
 */
export default function validateFields([
  fields,
  checkEmpty = true,
  checkPassword = false,
]) {
  /** @
   * TODO : check if fields is an object
   * TODO : inlude regex (password lenght, etc)
   * TODO : instead of checkPassword, compareFields then provide the key of the fields
   * TODO : document the function well
   */
  if (!fields) {
    throw new Error("No fields to validate");
  }

  if (checkEmpty) {
    for (let key in fields) {
      if (fields[key] === undefined || fields[key] === null) {
        return { ok: false, message: `${key} is undefined or null` };
      }
      if (!fields[key].trim().length) {
        return { ok: false, message: `please enter all fields` };
      }
    }

    if (!checkPassword) {
      return { ok: true };
    }
  }

  if (checkPassword) {
    const { password, "repeat password": repeatPassword } = fields;
    if (password !== repeatPassword) {
      return { ok: false, message: `passwords don't match` };
    }
  }

  return { ok: true };
}
