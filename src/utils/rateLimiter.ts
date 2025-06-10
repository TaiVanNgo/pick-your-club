/**
 * A simple rate limiter utility to manage API request rates
 */
export class RateLimiter {
  private queue: (() => Promise<void>)[] = [];
  private processing = false;
  private requestsPerMinute: number;
  private delayBetweenRequests: number;

  /**
   * Create a rate limiter for API requests
   * @param requestsPerMinute Maximum number of requests allowed per minute
   */
  constructor(requestsPerMinute: number = 30) {
    this.requestsPerMinute = requestsPerMinute;
    // Calculate delay in milliseconds between requests to stay under the limit
    this.delayBetweenRequests = Math.ceil((60 * 1000) / requestsPerMinute);
  }

  /**
   * Add a function to the rate-limited queue
   * @param fn The async function to execute
   * @returns A promise that resolves with the result of the function
   */
  async add<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });

      if (!this.processing) {
        this.processQueue();
      }
    });
  }

  /**
   * Process the queue with rate limiting
   */
  private async processQueue(): Promise<void> {
    if (this.queue.length === 0) {
      this.processing = false;
      return;
    }

    this.processing = true;
    const fn = this.queue.shift();

    if (fn) {
      await fn();
      
      // Wait for the calculated delay before processing the next item
      await new Promise(resolve => setTimeout(resolve, this.delayBetweenRequests));
      
      // Process next item in queue
      this.processQueue();
    }
  }
}

// Create a default instance with a conservative rate limit
export const apiRateLimiter = new RateLimiter(20); // 20 requests per minute
