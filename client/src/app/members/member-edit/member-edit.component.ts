import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editForm') editForm: NgForm | undefined;

  @HostListener('window:beforeunload',['$event']) unloadNotification($event:any){

    if(this.editForm?.dirty){

      $event.returnValue=true;
    }
  }

  member: Member | undefined;
  user: User | null=null;

  constructor(private accountService: AccountService, private memberService: MembersService) {

    // the constructor should also have a "private toastr:ToastrService" as parameter so that the user sees a toast when they update their profile

    this.accountService.currentUser$.pipe(take(1)).subscribe({

      next: user=>this.user=user
    })
   }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){

    if(!this.user) return;

    this.memberService.getMember(this.user.username).subscribe({

      next: member=>this.member=member
    })
  }

  updateMember(){
      this.memberService.updateMember(this.editForm?.value).subscribe({

        next: _ => {

          console.log(this.member);

          console.log("communication entre forms fonctionne");
      
          //this.toastr.success("Profile updated successfully")
          this.editForm?.reset(this.member);
      


        }
      })
   
  }

}
