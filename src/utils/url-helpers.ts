export const urlBuilder = (
  url: string,
  params: Record<string, string>
): string => {
  let result = url;
  for (const key of Object.keys(params)) {
    if (result.replaceAll)
      result = result.replaceAll(`{{${key}}}`, params[key]);
  }
  return result;
};
