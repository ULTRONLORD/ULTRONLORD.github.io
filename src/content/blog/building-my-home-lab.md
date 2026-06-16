---
title: "Building my first home lab"
date: 2026-06-12
summary: "Why I'm carving a flat home network into VLANs, and what the setup looks like so far."
---

This is the first entry in what I hope becomes a long log of things I break, fix, and
finally understand. I'm starting where my roadmap starts: **networking**.

## Why a home lab

You can read about subnetting and VLANs all day, but it doesn't click until packets are
actually moving through hardware you own. A home lab is a safe place to misconfigure
things, watch them fail, and learn why.

## The plan

- A managed switch so I can actually create VLANs
- pfSense as the router/firewall between segments
- One VLAN for trusted devices, one for lab experiments, one for "untrusted" gear

## What's next

Once the segments are up, I'll capture traffic with Wireshark and walk through a TCP
handshake packet by packet. That teardown will be the next post.

> A smooth sea never made a skilled mariner.
