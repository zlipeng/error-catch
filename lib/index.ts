/**
 * 能捕获：ReferenceError(变量未声明)，TypeError（值类型错误）,RangeError
 * 不能捕获：语法错误, 图片、script、css加载错误, promise, new Image, fetch错误
 *  */
window.onerror = function(message, source, lineno, colno, error) {
  console.log('捕获到异常-onerror：', {message, source, lineno, colno, error});
}

/**
 * 能捕获：图片、script、css加载错误，语法错误，ReferenceError(变量未声明)，TypeError（值类型错误）,RangeError
 * 不能捕获：new Image, fetch错误, promise
 *  */
window.addEventListener('error', (error) => {
  console.log('捕获到异常-error：', error);
}, true)

/**
 * 能捕获：promise
 */
window.addEventListener("unhandledrejection", function(e){
  console.log('unhandledrejection', e);
});


/**
 * try catch
 */


/**
 * Ajax
 */
