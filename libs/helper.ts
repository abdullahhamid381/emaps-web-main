import moment from "moment";

/**
 * @param  {string} str capitalize first letter of the given paramter
 */

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * @param  {string} email value of email
 */
// helper function which will validate email address
export const validateEmail = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

/**
 * @param  {string} value value of anyfield
 */
// helper function which will validate if string is empty or not
export const isEmpty = (str: string) => {
  return !str || str?.trim()?.length === 0;
};

export const truncateString = (str: string, num: number) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

// helper function which will return random 4 digits string
export const generateRandomKey = () => Math.random().toString(36).slice(2, 6);

// helper function which will return true if device is mobile
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  if (
    window?.innerWidth > 768 &&
    !window.navigator.userAgent.includes("Mobile")
  ) {
    return false;
  }
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
};

// helper function which will auto scroll to top of the page
export const scrollToTop = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};

// helper function which will return divide array into chunks
export const chunkArray = (myArray: any[], chunk_size: number) => {
  try {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  } catch (error) {
    return [];
  }
};

// helper function which will return params chunks
export const getParamsChunks = (chunks: any) => {
  try {
    const params: any = {};
    chunks.forEach((item: any) => {
      params[decodeURI(item[0])] = decodeURI(item[1]);
    });
    return params;
  } catch (error) {
    return {};
  }
};

// helper function which will return aws signed url of the file
export const fetchSignedURL = async (file: any) => {
  try {
    const data = { path: file.path };
    const signedUrlResponse = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/s3`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (signedUrlResponse.ok) {
      const signedResponse = await signedUrlResponse.json();
      return signedResponse.url;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// helper function which will return formated time (e.g: 1w, 2d, 3h, 4m)
// Example usage:
// const timestamp = 1672900434; // Replace this with your actual timestamp
// const formattedTime = formatPreviousMoment(timestamp);
// console.log(formattedTime); // Output: "1w" (for example, if the comment was made about a week ago)
export const formatPreviousTimestamp = (timestamp: number) => {
  const now = moment();
  const commentTime = moment(timestamp);
  const diffInMinutes = now.diff(commentTime, "minutes");

  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`;
  } else if (diffInMinutes < 24 * 60) {
    const diffInHours = now.diff(commentTime, "hours");
    return `${diffInHours}h`;
  } else if (diffInMinutes < 7 * 24 * 60) {
    const diffInDays = now.diff(commentTime, "days");
    return `${diffInDays}d`;
  } else if (diffInMinutes < 365 * 24 * 60) {
    const diffInWeeks = now.diff(commentTime, "weeks");
    return `${diffInWeeks}w`;
  } else {
    const diffInYears = now.diff(commentTime, "years");
    return `${diffInYears}y`;
  }
};

// helper function which will return formated time (e.g: 1w, 2d, 3h, 4m)
export const getTimeStampFromDate = (date: any) => {
  const timestamp = Date.parse(date);
  return timestamp;
};

// helper function which will return formated time (e.g: 1w, 2d, 3h, 4m)
export const getPreviousDateDiiference = (date: any) => {
  const timestamp = Date.parse(date);
  return formatPreviousTimestamp(timestamp);
};

// helper function which will check if string is url
export const isUrl = (str: string) => {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
};

// helper function which will return true if string is valid password and strong password
export const isStrongPassword = (password: string) => {
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return strongRegex.test(password);
};

// helper function which will return true if string is valid file and image
export const isImage = (file: any) => {
  if (file?.type?.includes("image")) {
    return true;
  }
  return false;
};

// helper function which will return true if string is valid file and pdf
export const isPdf = (file: any) => {
  if (file?.type?.includes("pdf")) {
    return true;
  }
  return false;
};

// helper function which will return true if string is valid file and document
export const isDocument = (file: any) => {
  if (
    file?.type?.includes("document") ||
    file?.type?.includes("pdf") ||
    file?.type?.includes("txt") ||
    file?.type?.includes("doc") ||
    file?.type?.includes("docs") ||
    file?.type?.includes("docx")
  ) {
    return true;
  }
  return false;
};

// helper function which will return true if string is valid file and document
export const isDocument1 = (file: any) => {
  if (
    file?.type?.includes("document") ||
    file?.type?.includes("pdf") ||
    file?.type?.includes("txt") ||
    file?.type?.includes("doc") ||
    file?.type?.includes("docs") ||
    file?.type?.includes("docx") ||
    file?.type?.includes("image")
  ) {
    return true;
  }
  return false;
};

// helper function which will return true if string is valid number
export const isStrIsNumber = (str: string) => {
  return !isNaN(Number(str));
};

// helper function which will create params for apis
export const createParams = (params: any) => {
  return Object.entries(params || {})
    .map((param: any) => {
      return `${param[0]}=${param[1]}`;
    })
    .join("&");
};

// helper function which will return all the dimensions of the images
export const getImageDimensions = async (
  fileList: FileList
): Promise<{ width: number; height: number }[]> => {
  const dimensions: { width: number; height: number }[] = [];
  const promises: Promise<void>[] = [];
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    const promise = new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        dimensions.push({ width: img.width, height: img.height });
        resolve();
      };
      img.src = URL.createObjectURL(file);
    });
    promises.push(promise);
  }

  await Promise.all(promises);

  return dimensions;
};

// helper function which will return all times list
export const getTimeList = () => {
  const time = [];
  for (let hours = 0; hours < 24; hours++) {
    for (let minutes = 0; minutes < 60; minutes += 15) {
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
      let obj = {
        label: formattedTime,
        value: formattedTime,
      };
      time.push(obj);
    }
  }
  return time;
};

// helper function which will return all hours list
export const getHoursList = () => {
  const hours = [];
  for (let i = 30; i <= 720; i += 30) {
    let obj: any = { label: "", value: "" };
    if (i === 60) {
      obj.label = "01 Hour";
      obj.value = "01 Hour";
      hours.push(obj);
    } else if (i === 120) {
      obj.label = "02 Hours";
      obj.value = "02 Hours";
      hours.push(obj);
    } else {
      obj.label = `${i / 60} Hours`;
      obj.value = `${i / 60} Hours`;
      hours.push(obj);
    }
  }
  return hours;
};

// helper function which will return formated price
export const formatPrice = (price: number) => {
  return `$${price.toLocaleString("en-US")}`;
};

// helper function which will scroll to bottom of the container
export const smoothScrollToBottom = (
  containerRef: React.RefObject<HTMLDivElement>,
  duration: number = 400
): void => {
  const container = containerRef.current;
  if (!container) return;

  const scrollHeight = container.scrollHeight;
  const currentScrollTop = container.scrollTop;
  const difference = scrollHeight - currentScrollTop;
  const startTime = performance.now();

  const animateScroll = (timestamp: number) => {
    const elapsed = timestamp - startTime;
    const progress = Math.min(1, elapsed / duration);
    container.scrollTop = currentScrollTop + difference * progress;

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

export const abbreviateNumber = (number: number) => {
  const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

  // what tier? (determines SI symbol)
  const tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier == 0) return number;

  // get suffix and determine scale
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
};

// helper function which will return true if string is parseable
export const isParsable = (obj: any) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

// get formated date [format: 'DD MMM YYYY' , 'YYYY-MM-DD'] [date: any valid sting]
export const getFormatedDate = (date: string) => {
  try {
    // console.log("date=============",date)
    // // return moment(date).format(format); //
    // return date;
    const ndate = new Date(date);
    const year = ndate.getFullYear();
    const month = String(ndate.getMonth() + 1).padStart(2, "0");
    const day = String(ndate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  } catch (error) {
    return "";
  }
};
export const getFormatedDateNew = (date: string) => {
  try {
    // console.log("date=============",date)
    // // return moment(date).format(format); //
    // return date;
    const ndate = new Date(date);
    const year = ndate.getFullYear();
    const month = String(ndate.getMonth() + 1).padStart(2, "0");
    const day = String(ndate.getDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
  } catch (error) {
    return "";
  }
};

export const getDocumentTypeShortName = (type: string) => {
  if (type.includes("pdf")) {
    return "pdf";
  }

  if (
    type.includes("word") ||
    type.includes("doc") ||
    type.includes("docx") ||
    type.includes("txt")
  ) {
    return "word";
  }

  if (type.includes("image")) {
    return "img";
  }

  return "file";
};
