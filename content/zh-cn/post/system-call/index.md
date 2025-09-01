---
title: "System Call"
description: 
date: 2025-09-01T16:25:33+08:00
image: 
math: 
license: 
comments: true
weight: 1
categories:
    - System Category
tags:
    - Linux
---

让我们从最简单的system call开始

> hello world for system call

```c
#include <stdio.h>
#include <unistd.h>

int main() {
  int pid = getpid();
  printf("PID: %d\n", pid);
  return 0;
}
```

运行这段程序可以获得进程ID

## 简单理解syscall

+ 执行syscall指令后，cpu从用户态切换到内核态
+ syscall指令会调用内核的syscall函数，执行完毕后，cpu从内核态切换回用户态
+ 参数和结果都在寄存器中传递
  
## zig示例

```zig
const std = @import("std");

pub fn main() !void {
    const pid: i32 = std.posix.system.getpid();
    std.debug.print("PID: {d}\n", .{pid});
}
```

## rust示例

```rust
extern crate libc;
fn main() {
    let pid: i32 = unsafe { libc::getpid() };
    println!("PID: {}", pid);
}
```
