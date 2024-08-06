export interface Options {
  /**
   * Exclude time, i.e. hour, minute and second
   * @default false
   */
  excludeTime?: boolean
  /**
   * Exclude millisecond from time.
   * @default false
   */
  excludeMillisecond?: boolean
}

export function timestamp(options?: Options): string
export function timestamp(date: Date, options?: Options): string
export function timestamp(dateOrOptions?: Date | Options, optionsOrUndefined?: Options) {
  let date: Date
  let options: Options

  if (dateOrOptions instanceof Date) {
    date = dateOrOptions
    options = optionsOrUndefined ?? {}
  }
  else {
    date = new Date()
    options = dateOrOptions ?? {}
  }

  const { excludeTime = false, excludeMillisecond = false } = options

  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0')

  const dateArr = [year, month, day]
  const timeArr = [hours, minutes, seconds]

  const result = [...dateArr, ...(excludeTime ? [] : timeArr), ...(!excludeTime && !excludeMillisecond ? [milliseconds] : [])]

  return result.join('')
}

export default timestamp
