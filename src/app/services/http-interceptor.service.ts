import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken'); // 從 localStorage 獲取 token

    if (accessToken) {
      const headers = req.headers.set('Authorization', `Bearer ${accessToken}`);
      const authReq = req.clone({ headers });
      return next.handle(authReq);
    } else {
      // 如果沒有 token，直接傳遞請求（或者你可以選擇拋出一個錯誤，或導向登入頁）
      return next.handle(req);
    }
  }
}
