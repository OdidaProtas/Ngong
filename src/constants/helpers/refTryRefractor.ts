



export default async function refTryRefactor(promise: Promise<any>) {
  try {
    return [await promise, null];
  } catch (e) {
    return [null, e];
  }
}
