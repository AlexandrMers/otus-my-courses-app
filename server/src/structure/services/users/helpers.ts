type AnyObjectType = { [key: string]: any };

export const excludeFieldFromDoc = <RETURN_TYPE>(obj: AnyObjectType, field: string) => {
  return Object.entries(obj).reduce<AnyObjectType>((res, [key, value]) => {
    if (key !== field) {
      res[key] = value;
      return res;
    }
    return res;
  }, {}) as RETURN_TYPE;
};
